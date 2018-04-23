
function OpenBrowser() {
    // Run browsers and go to the demo site
    Browsers.Item(btIExplorer).Run("http://demoqa.com/registration/");
}

function TextBoxTests(user) {
    // Run browsers and go to the demo site
    Browsers.Item(btIExplorer).Run("http://demoqa.com/registration/");
    // Locate the textbox
    var username = Sys.Browser("*").Page("http://demoqa.com/registration/").Find("idStr", "name_3_firstname", 1000);
    // SetText
    username.SetText("phongtrinh");
}

function RadioButtonTests() {
    // Run browsers and go to the demo site
    Browsers.Item(btIExplorer).Run("http://demoqa.com/registration/");
    // Locate the 'Single' radio
    var singleXpath = "//label[text()='Single']/following-sibling::input[1]";
    // Locate the 'Married' radio
    var marriedXpath = "//label[text()='Married']/following-sibling::input[1]";
    // Select the Single
    var single = Sys.Browser("*").Page("http://demoqa.com/registration/").FindChildByXPath(singleXpath);
    var married = Sys.Browser("*").Page("http://demoqa.com/registration/").FindChildByXPath(marriedXpath);
    single.ClickButton();
    // Get the radio's status
    var status = single.checked;
    Log.Message(status);
    status = married.checked;
    Log.Message(status);
    Log.Message(typeof status);
}

function CheckBoxTests() {
    // Run browsers and go to the demo site
    Browsers.Item(btIExplorer).Run("http://demoqa.com/registration/");
    // Locate the 'Dance' checkbox
    var danceChkXpath = "//label[text()='Dance']/following-sibling::input[1]";
    // Locate the 'Reading' checkbox
    var readingChkXpath = "//label[text()='Reading']/following-sibling::input[1]";
    // Select the checkbox
    var danceChk = Sys.Browser("*").Page("http://demoqa.com/registration/").FindChildByXPath(danceChkXpath);
    danceChk.ClickChecked(true);
    // De-select the checkbox
    var readingChk = Sys.Browser("*").Page("http://demoqa.com/registration/").FindChildByXPath(readingChkXpath);
    readingChk.ClickChecked(false);
    // Get the checkbox's status
    var status = danceChk.checked;
    Log.Message(status);
    status = readingChk.checked;
    Log.Message(status);
    Log.Message(typeof status);
}

function DropDownTests() {
    // Run browsers and go to the demo site
    Browsers.Item(btIExplorer).Run("http://demoqa.com/registration/");
    // Locate the Country dropdown
    var country = Sys.Browser("*").Page("http://demoqa.com/registration/").Find("idStr", "dropdown_7", 10000, false);
    // Select by Vakue
    country.ClickItem("Albania");
    // Select by Index
    country.ClickItem(10);
    // Get the selected item
    var selectedItem = country.wText;
    Log.Message(selectedItem);
    // Count item
    var count = country.wItemCount;
    Log.Message(count);
}

function ButtonTests() {
    // Run browsers and go to the demo site
    Browsers.Item(btIExplorer).Run("http://demoqa.com/registration/");
    // Locate the Submit button
    var submitBtn = Sys.Browser("*").Page("http://demoqa.com/registration/").FindChildByXPath("//input[@name='pie_submit']");
    // Click
    submitBtn.Click();
    // Get properties
    Log.Message(submitBtn.ObjectLabel);
}

function CheckpointTests() {
    // Run browsers and go to the demo site
    Browsers.Item(btIExplorer).Run("http://demoqa.com/registration/");
    // Locate the object
    var header = Sys.Browser("*")
    .Page("http://demoqa.com/registration/")
    .FindChildByXPath("//*[@id='main']//h1");
    // Check property
    aqObject.CheckProperty(header, "innerText", cmpEqual, "Registration", true);
    aqObject.CheckProperty(header, "innerText", cmpNotEqual, "AAAA", true);
    aqObject.CheckProperty(header, "innerText", cmpContains, "Regis", true);
    aqObject.CheckProperty(header, "innerText", cmpNotContains, "AAA", true);
    aqObject.CheckProperty(header, "innerText", cmpStartsWith, "Regis", true);
    aqObject.CheckProperty(header, "innerText", cmpEndsWith, "tion", true);
    aqObject.CheckProperty(header, "innerText", cmpIn, "Registration ABCXYZ", true);
    aqObject.CheckProperty(header, "innerText", cmpNotIn, "AAAA ABCXYZ", true);
    
}