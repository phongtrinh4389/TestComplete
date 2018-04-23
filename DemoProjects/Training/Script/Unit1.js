function LoginTest()
{
  //Iterates through the specified browsers.
  var BrowserItems, i;
  BrowserItems = new Array(1);
  BrowserItems[0] = Browsers.Item("firefox");
  for(i = 0; i < BrowserItems.length; i++)
  {
    BrowserItems[i].Run("http://store.demoqa.com/", 30);
    Project.Variables.LoginData.Reset();
    for(; !Project.Variables.LoginData.IsEOF();)
      Project.Variables.LoginData.Next();
    //Simulates a left-button single click in a window or control as specified (relative position, shift keys).
    Aliases.browser.pageOnlineStoreToolsqaDummyTestS.header.linkMyAccount.Click();
    //Enters text in the text box.
    Aliases.browser.pageYourAccountOnlineStore.panelContent.articlePost31.formAjaxLoginform.textboxUsername.SetText(Project.Variables.LoginData.Value("username"));
    //Enters text in the text box.
    Aliases.browser.pageYourAccountOnlineStore.panelContent.articlePost31.formAjaxLoginform.passwordboxPassword.SetText(Project.Variables.LoginData.Value(" password"));
    //Performs a single click on the specified button.
    Aliases.browser.pageYourAccountOnlineStore.panelContent.articlePost31.formAjaxLoginform.submitbuttonLogin.ClickButton();
    //Checks whether the 'contentText' property of the Aliases.browser.pageYourAccountOnlineStore2.panelWpToolbar.linkHttpStoreDemoqaComWpAdminPro object equals 'Howdy,
    //phongtrinh'.
    aqObject.CheckProperty(Aliases.browser.pageYourAccountOnlineStore2.panelWpToolbar.linkHttpStoreDemoqaComWpAdminPro, "contentText", cmpEqual, "Howdy,\nphongtrinh");
    //Simulates a left-button single click in a window or control as specified (relative position, shift keys).
    Aliases.browser.pageYourAccountOnlineStore.header.panelAccountLogout.linkLogout.Click();
    //Checks whether the 'Exists' property of the Aliases.browser.pageYourAccountOnlineStore.panelContent.articlePost31.formAjaxLoginform.submitbuttonLogin object equals True.
    aqObject.CheckProperty(Aliases.browser.pageYourAccountOnlineStore.panelContent.articlePost31.formAjaxLoginform.submitbuttonLogin, "Exists", cmpEqual, true);
    //Checks whether the 'idStr' property of the Aliases.browser.pageYourAccountOnlineStore.panelContent.articlePost31.formAjaxLoginform.submitbuttonLogin object equals 'login'.
    aqObject.CheckProperty(Aliases.browser.pageYourAccountOnlineStore.panelContent.articlePost31.formAjaxLoginform.submitbuttonLogin, "idStr", cmpEqual, "login");
    //Closes the specified Window object.
    Aliases.browser.BrowserWindow.Close(30000);
  }
}