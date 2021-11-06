package org.firstinspires.ftc.teamcode.opmodes.teleop;

import com.qualcomm.robotcore.eventloop.opmode.OpMode;
import com.qualcomm.robotcore.eventloop.opmode.TeleOp;
import com.qualcomm.robotcore.hardware.DcMotor;
import com.qualcomm.robotcore.hardware.DcMotorSimple;

import org.firstinspires.ftc.teamcode.__compiledautoauto.SpinTaunt__macro_autoauto;
import org.firstinspires.ftc.teamcode.__compiledautoauto.Testmacro__macro_autoauto;
import org.firstinspires.ftc.teamcode.__compiledautoauto.TurnAround__macro_autoauto;
import org.firstinspires.ftc.teamcode.managers.FeatureManager;
import org.firstinspires.ftc.teamcode.managers.imu.ImuManager;
import org.firstinspires.ftc.teamcode.managers.input.InputManager;
import org.firstinspires.ftc.teamcode.managers.input.nodes.ButtonNode;
import org.firstinspires.ftc.teamcode.managers.input.nodes.JoystickNode;
import org.firstinspires.ftc.teamcode.managers.input.nodes.MultiInputNode;
import org.firstinspires.ftc.teamcode.managers.input.nodes.ScaleNode;
import org.firstinspires.ftc.teamcode.managers.macro.MacroManager;
import org.firstinspires.ftc.teamcode.managers.macro.MacroRunnerThread;
import org.firstinspires.ftc.teamcode.managers.manipulation.ManipulationManager;
import org.firstinspires.ftc.teamcode.managers.movement.MovementManager;
import org.firstinspires.ftc.teamcode.managers.sensor.SensorManager;
import org.firstinspires.ftc.teamcode.managers.telemetry.TelemetryManager;
import org.firstinspires.ftc.teamcode.unitTests.dummy.DummyGamepad;
import org.firstinspires.ftc.teamcode.unitTests.dummy.DummyHardwareMap;
import org.firstinspires.ftc.teamcode.unitTests.dummy.DummyImu;
import org.firstinspires.ftc.teamcode.unitTests.dummy.DummyTelemetry;
import org.junit.Test;

import java.util.Arrays;

@TeleOp
public class ExampleTeleopCarousel extends OpMode {
    private MovementManager driver;
    private ManipulationManager hands;
    private InputManager input;
    private SensorManager sensor;
    private ImuManager imu;
    private MacroManager macroManager;
    private boolean precision = false;
    private boolean dashing = false;

    public DcMotor NewMotor(DcMotor motor, String name) {
        motor = hardwareMap.get(DcMotor.class, name);
        return motor;
    }

    @Override
    public void init() {
        // Phone is labelled as Not Ready For Use
        FeatureManager.setIsOpModeRunning(true);
        TelemetryManager telemetryManager = new TelemetryManager(telemetry, this, TelemetryManager.BITMASKS.WEBSERVER);
        telemetry = telemetryManager;

//        imu = new ImuManager(hardwareMap.get(com.qualcomm.hardware.bosch.BNO055IMU.class, "imu"));

        DcMotor fl = hardwareMap.get(DcMotor.class, "fl");
        DcMotor fr = hardwareMap.get(DcMotor.class, "fr");
        DcMotor br = hardwareMap.get(DcMotor.class, "br");
        DcMotor bl = hardwareMap.get(DcMotor.class, "bl");

        driver = new MovementManager(fl, fr, br, bl);

        hands = new ManipulationManager(
                hardwareMap,
                new String[] {},
                new String[] {},
                new String[] {"Carousel"}
        );

        input = new InputManager(gamepad1, gamepad2);

        input.registerInput("drivingControls",
                new MultiInputNode(
                        new JoystickNode("left_stick_y"),
                        new ScaleNode(new JoystickNode("right_stick_x"), -1),
                        new ScaleNode(new JoystickNode("left_stick_x"), -1)
                )
        );
        input.registerInput("precisionDriving",
                new ButtonNode("b")
        );
        input.registerInput("dashing",
                new ButtonNode("x")
        );
        input.registerInput("Carousel",
                new ButtonNode("y")
        );
        input.registerInput("spin",
                        new ButtonNode("dpadup")
        );
        input.registerInput("taunt1",
                        new ButtonNode("dpadleft")
        );
        input.registerInput("taunt2",
                new ButtonNode("dpadright")
        );
        input.registerInput("taunt3",
                new ButtonNode("dpaddown")
        );
        input.registerInput("turnAround",
            new ButtonNode("right_stick_button")
        );
    }

    @Override
    public void loop() {
        input.update();
        driver.driveOmni(input.getFloatArrayOfInput("drivingControls"));
        if (input.getBool("precisionDriving") == true && precision == false){
            driver.downScale(0.5f);
            precision = true;
        }
        else if (input.getBool("precisionDriving") == true && precision == true){
            precision = true;
        }
        else if (input.getBool("precisionDriving") == false && precision == true){
            driver.upScale(0.5f);
            precision = false;
        }
        else {
            precision = false;
        }

        if (input.getBool("dashing") == true && dashing == false){
            driver.upScale(0.4f);
            dashing = true;
        }
        else if (input.getBool("precisionDriving") == true && dashing == true){
            dashing = true;
        }
        else if (input.getBool("precisionDriving") == false && dashing == true){
            driver.downScale(0.4f);
            dashing = false;
        }
        else {
            dashing = false;
        }
        hands.setMotorPower("Carousel", input.getFloat("Carousel")*-0.25);
        if (input.getBool("turnAround") == true) {
        }
        if (input.getBool("spin") ==true) {
        }
        telemetry.addData("FL Power", driver.frontLeft.getPower());
        telemetry.addData("FR Power", driver.frontRight.getPower());
        telemetry.addData("BR Power", driver.backLeft.getPower());
        telemetry.addData("BL Power", driver.backRight.getPower());
        telemetry.addData("Carousel", hands.getMotorPower("Carousel"));
        telemetry.addData("WhichBoy", FeatureManager.getRobotName());
        telemetry.addData("driver control", Arrays.toString(input.getFloatArrayOfInput("drivingControls")));
        telemetry.update();
    }

    public void stop() {
        FeatureManager.setIsOpModeRunning(false);
    }

    @Test
    public void test() {
        this.hardwareMap = new DummyHardwareMap();
        this.gamepad1 = new DummyGamepad();
        this.gamepad2 = new DummyGamepad();
        this.telemetry = new DummyTelemetry();

        long startTime = System.currentTimeMillis();

        this.start();
        this.init();
        this.init_loop();
        for(int i = 0; i < 100; i++) {
            this.time = (System.currentTimeMillis() - startTime) * 0.001;
            this.loop();
        }
        this.stop();
    }
}