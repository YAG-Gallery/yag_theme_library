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
			maxW = 1200
		}

		thumb {
		    width = 200c
		    height = 200c
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
		magnificLightBox = 	EXT:yag/Resources/Public/Js/MagnificPopup/dist/jquery.magnific-popup.min.js
		lightbox = 			EXT:yag/Resources/Public/Js/LightBox.js
	}


	templateIncludeCSS {
		yag_theme_library20 = EXT:yag_theme_library/Resources/Public/CSS/Theme.css
		yag_theme_library30 = EXT:yag_theme_library/Resources/Public/CSS/BootstrapExtract.css

		magnificLightBox = EXT:yag/Resources/Public/Js/MagnificPopup/dist/magnific-popup.css
		yagLightBox = EXT:yag/Resources/Public/CSS/Lightbox.css
	}

	javaScriptSettings {
		lightBox {
			enabled = 1
			mainClass = mfp-with-zoom mfp-fade
			zoom {
				enabled = true
				duration = 200
				easing = ease-in-out
			}
		}
	}
}
