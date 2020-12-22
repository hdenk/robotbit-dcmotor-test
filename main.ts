function testDCMotor (nr: number) {
    driveDCMotor(nr, -128)
    basic.pause(1000)
    robotbit.MotorStopAll()
    basic.pause(1000)
    driveDCMotor(nr, 128)
    basic.pause(1000)
}
function driveDCMotor (nr: number, speed: number) {
    if (nr == 1) {
        robotbit.MotorRun(robotbit.Motors.M1A, speed)
    } else if (nr == 2) {
        robotbit.MotorRun(robotbit.Motors.M1B, speed)
    } else if (nr == 3) {
        robotbit.MotorRun(robotbit.Motors.M2A, speed)
    } else if (nr == 4) {
        robotbit.MotorRun(robotbit.Motors.M2B, speed)
    }
}
basic.showString("DC Motor Test")
basic.forever(function () {
    for (let index = 0; index <= 3; index++) {
        testDCMotor(index + 1)
    }
})
