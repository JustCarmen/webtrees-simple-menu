Simple menu module for webtrees
==============================

[![Latest Release](https://img.shields.io/github/release/JustCarmen/webtrees-simple-menu.svg)][1]
[![webtrees major version](https://img.shields.io/badge/webtrees-v2.1.x-green)][2]
[![Downloads](https://img.shields.io/github/downloads/JustCarmen/webtrees-simple-menu/total.svg)]()

[![paypal](https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=XPBC2W85M38AS&item_name=webtrees%20modules%20by%20JustCarmen&currency_code=EUR)

Description
------------
Would you like to have an easy solution to add an extra mainmenu item and page to your webtrees installation?
Here it is!

With this module you can set a new menu item and page. It is a simple module, without fancy extras. It is developed to quickly add a new menu item and page to webtrees, that is it. It does not provide the ability to add submenu items or different pages per language.

Installation & upgrading
------------------------
[Download][1] and unpack the zip file and place the folder jc-simple-menu-1 in the modules_v4 folder of webtrees. Upload the newly added folder to your server. It is activated by default. Go to the control panel, click in the module section on 'Menus' where you can find the newly added menu item. You can move it up or down to change the order. Click on the tools icon next to the title of the newly added menu item. This will open the settings page where you can set a menu title and add the page title and text.

Menu icons
----------
The module comes with a set of menu icons for all standard webtrees themes and the rural theme. You can use these icons or replace them with your own. The icons are located in the folder resources/icons.

Extra menus and pages
---------------------
If you want to have multiple main menu items and associated pages, just make a copy of this module in your modules_v4 folder. Change the serial number at the end from 1 to 2 and so on. Open the file module.php in a text editor like notepad and search for ROUTE_URL near the top of the file. In this link the page type (jc-simple-menu-1) is hardcoded to prevent conflicts with other modules or another copy of this module. Change the serial number at the end of the page type accordingly to make it unique. You can use this module indefinitely, as long as you give each module and ROUTE_URL a unique name. Keep in mind that you must repeat this step after each upgrade. You will not lose your settings after an upgrade as long as you give the new version of the module the same folder name as before.

Translation
-----------
This module contains a few translatable textstrings. Copy the file nl.php into the resources/lang folder and replace the Dutch text with the translation into your own language. Use the official two-letter language code as file name. Look in the webtrees folder resources/lang to find the correct code.

Bugs and feature requests
-------------------------
This is a simple module and provided as is. However, if you experience any bugs you can [create a new issue on GitHub][3]. Since this is a simple module, I will be reluctant to accept feature requests.

 [1]: https://github.com/JustCarmen/webtrees-simple-menu/releases/latest
 [2]: https://webtrees.github.io/download/
 [3]: https://github.com/JustCarmen/webtrees-simple-menu/issues?state=open
