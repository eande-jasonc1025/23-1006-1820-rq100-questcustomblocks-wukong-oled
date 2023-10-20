// tests go here; this will not be compiled when this package is used as an extension.

// jwc 23-1006-1847

input.onButtonPressed(Button.A, function () {
    quest_Motors.quest_Set_PowerMotorsViaBlueRedBlackPins_WithTimer_Fn(
        quest_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorLeft__S0_MotorRight,
        50,
        -50,
        turn_Duration_Enum.msec_2000,
        debug_Show_Enum.Dashboard_OLED
    )
})
input.onButtonPressed(Button.B, function () {
    quest_Motors.quest_Set_PowerMotorsViaBlueRedBlackPins_WithTimer_Fn(
        quest_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorLeft__S0_MotorRight,
        -50,
        50,
        turn_Duration_Enum.msec_2000,
        debug_Show_Enum.MicroBit_Screen
    )
})
basic.forever(function () {
    quest_Dashboard.quest_Show_String_For_Oled_BigFont_Fn(
        convertToText(randint(0, 9)),
        0,
        0
    )
        quest_Dashboard.quest_Show_Oled_Cleared_Fn(
        )
        quest_Timer.quest_Set_ContinueCurrentState_CountdownTimer_Fn(3, quest_Time_Units_Enum.Seconds)
})