module.exports.validStrings = {
  validStatus: "<Hold:0|MPos:0.000,0.000,0.000|Bf:15,128|FS:675.5,24000|Ov:120,100,100|WCO:0.000,-5.200,306.351|A:SFM>",
  validStatusB: "<Idle|WPos:0.000,0.000,0.000|FS:0,0>",
  validStatusC: "<Idle>",
  validStatusD: "<Run|MPos:0.000,0.000,0.000|FS:112,12000|Ov:120,110,100|A:C>",
  validInitialization: "Grbl 1.1f ['$' for help]",
  validAlarm: "ALARM:9",
  validError: "error:20",
  validSetting: "$10=255.5",
  validSettingB: "$6=1",
  validFeedbackMessage: "[MSG:‘$H’|’$X’ to unlock]",
  validGcodeState: "[GC:G0 G54 G17 G21 G90 G94 M5 M9 T0 F0 S0]",
  validHelpMessage: "[HLP:$$ $# $G $I $N $x=val $Nx=line $J=line $SLP $C $X $H ~ ! ? ctrl-x]",
  validBuildVersion: "[VER:1.1f.20170131:]",
  validBuildVersionB: "[VER:1.1e.20170131:My OEM string]",
  validBuildOptions: "[OPT:V,15,128]",
  validSuccess: "ok",
  validGcodeSystem: "[G28:]",
  validProbeResult: "[PRB:]",
  validEcho: "[echo:]",
  validStartupLine: ">G54G20:ok"
}