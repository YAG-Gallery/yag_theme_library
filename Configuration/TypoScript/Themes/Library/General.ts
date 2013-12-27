####################################################
# Extlist configuration of the album 
#
# @author Daniel Lienert <daniel@lienert.cc>
# @package YAG
# @subpackage Typoscript
####################################################

plugin.tx_yag.settings.themes.library {

	title = YAG Library
	description = Using Extlist to Filter YAG Records

    controller {
        ItemList {
            unCachedList.template = EXT:yag_theme_library/Resources/Private/Templates/ItemList/List.html
        }
    }
    

	resolutionConfigs >
	resolutionConfigs {
		medium {
			maxW = 800
		}

		thumb {
		    width = 120c
		    height = 120c
		}
	}


	includeLibJS >
	includeLibCSS >
	includeCSS >
	includeJS >

	/*
	* As this plugin is not cached, the page is already rendered and we cannot add page-header inside the plugin
	* So we need to add the header inside the template. If you have added the CSS / JS files in the page template you can deactivate the inclusion here
	*/

	includeJSInTemplate = 1
	includeCSSInTemplate = 1

	templateIncludeJS {
		jQuery  = 			EXT:yag/Resources/Public/Js/JQuery/jquery-1.8.3.min.js
	}


	templateIncludeCSS {
		yag_theme_library10 = EXT:yag/Resources/Public/CSS/theme.css
    	yag_theme_library20 = EXT:yag_theme_library/Resources/Public/CSS/BootstrapExtract.css
		yag_theme_library30 = EXT:yag/Resources/Public/CSS/Lightbox.css
		yag_theme_library40 = EXT:yag_theme_library/Resources/Public/CSS/Theme.css

	}
}
