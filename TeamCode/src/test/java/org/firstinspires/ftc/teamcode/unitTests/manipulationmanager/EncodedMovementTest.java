package org.firstinspires.ftc.teamcode.unitTests.manipulationmanager;

import org.firstinspires.ftc.teamcode.managers.feature.FeatureManager;
import org.firstinspires.ftc.teamcode.managers.manipulation.ManipulationManager;
import org.firstinspires.ftc.teamcode.unitTests.dummy.DummyHardwareMap;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class EncodedMovementTest {
    @Test
    public void test() {
        final String fooMotor = "foo";

        FeatureManager.setIsOpModeRunning(true);
        ManipulationManager m = new ManipulationManager(new DummyHardwareMap(), new String[0], new String[0], new String[] {fooMotor});

        m.encodeMoveToPosition(fooMotor, 4096);

        long lastPrintTime = System.currentTimeMillis();
        //wait until it's finished moving
        while(m.hasEncodedMovement(fooMotor)) {
            long now = System.currentTimeMillis();
            if(now - lastPrintTime > 1000) {
                FeatureManager.logger.log("Current: " + m.getMotorPosition(fooMotor));
                lastPrintTime = now;
            }
        }

        assertEquals(4096, m.getMotorPosition(fooMotor), ManipulationManager.ENCODER_TICK_VALUE_TOLERANCE);
    }
}
