function GeneralEvents_OnStartTest(Sender)
{
  Log.Message("Start Test");
}

function GeneralEvents_OnStopTest(Sender)
{
  Sys.Browser().Close();
  Log.Message("End Test");
}