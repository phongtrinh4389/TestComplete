/******* Homepage ************/
// My Account Link
var myAccountLinkXpath = "//a[@href='http://store.demoqa.com/products-page/your-account/'][@title='My Account']";

/******* Login page ***********/
// Username
var usernameXpath = "//*[@id='log']";
// Password
var passwordXpath = "//*[@id='pwd']";
// Submit 
var loginXpath = "//*[@id='login']";

 /******** My Account page *********/
// User label
var userLabelXpath = "//a[@href='http://store.demoqa.com/wp-admin/profile.php']";
// Logout button
var logoutXpath = "//*[@id='account_logout']";


function Login(username, password) {
  // Navigate to the Home page
  Browsers.CurrentBrowser.Navigate("http://store.demoqa.com/");
  // Click My Account link
  var homepage = Sys.Browser().Page("http://store.demoqa.com/");
  var myAccountLink = homepage.FindChildByXPath(myAccountLinkXpath);
  myAccountLink.Click();
  
  // At Login page
  var login_page = Sys.Browser().Page("http://store.demoqa.com/products-page/your-account/");
  // Username
  var usernameTxt = login_page.FindChildByXPath(usernameXpath);
  usernameTxt.SetText(username);
  // Password
  var passwordTxt = login_page.FindChildByXPath(passwordXpath);
  passwordTxt.SetText(password);                                                                                                                                                                                                                                                                                                                                                 
  // Click Login
  var loginBtn = login_page.FindChildByXPath(loginXpath);
  loginBtn.Click();
  
  // At My Account page
  var account_page = Sys.Browser().Page("http://store.demoqa.com/products-page/your-account/?login=1");
  // Checkpoint
  var userLabel = login_page.FindChildByXPath(userLabelXpath);
  aqObject.CheckProperty(userLabel, "contentText", cmpContains, username, true);
}

function Logout() {
  // Logout
  var account_page = Sys.Browser().Page("http://store.demoqa.com/products-page/your-account/?login=1");
  var logoutBtn = account_page.FindChildByXPath(logoutXpath);
  logoutBtn.Click();
  // Check Login page
  var login_page = Sys.Browser().Page("http://store.demoqa.com/products-page/your-account/");
  var usernameTxt = login_page.FindChildByXPath(usernameXpath);
  aqObject.CheckProperty(usernameTxt, "Exists", cmpEqual, true);
}