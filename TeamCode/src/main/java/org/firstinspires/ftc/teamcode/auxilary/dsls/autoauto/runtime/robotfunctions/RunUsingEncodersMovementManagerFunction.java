package org.firstinspires.ftc.teamcode.auxilary.dsls.autoauto.runtime.robotfunctions;

import org.firstinspires.ftc.teamcode.auxilary.dsls.autoauto.model.values.*;
import org.firstinspires.ftc.teamcode.auxilary.dsls.autoauto.runtime.NativeRobotFunction;
import org.firstinspires.ftc.teamcode.auxilary.dsls.autoauto.runtime.ManagerSetupException;
import org.firstinspires.ftc.teamcode.managers.FeatureManager;

public class RunUsingEncodersMovementManagerFunction extends NativeRobotFunction {
    private org.firstinspires.ftc.teamcode.managers.movement.MovementManager manager;

    public RunUsingEncodersMovementManagerFunction(FeatureManager manager) {
        this.manager = (org.firstinspires.ftc.teamcode.managers.movement.MovementManager)manager;
    }

    @Override
    public AutoautoPrimitive call(AutoautoPrimitive[] args) {
        if(manager == null) throw new ManagerSetupException("No .MovementManager; please define one in template.notjava");
        if(args.length == 0) {manager.runUsingEncoders(); return new AutoautoUndefined();}throw new org.firstinspires.ftc.teamcode.auxilary.dsls.autoauto.runtime.errors.AutoautoNoNativeMethodOverloadException("No runUsingEncodersMovementManager with 0 args");
    }
}