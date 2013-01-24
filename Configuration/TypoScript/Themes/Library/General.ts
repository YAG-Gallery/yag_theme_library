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
		jQuery  = 			EXT:yag/Resources/Public/Js/JQuery/jquery-1.6.4.min.js
		jqueryFancyBox  =  	EXT:yag/Resources/Public/Js/JQuery/Fancybox/jquery.fancybox-1.3.4.pack.js
		jqueryMouseWheel  = EXT:yag/Resources/Public/Js/JQuery/Fancybox/jquery.mousewheel-3.0.4.pack.js
		jqueryEasing  =  	EXT:yag/Resources/Public/Js/JQuery/Fancybox/jquery.easing-1.3.pack.js
	}


	templateIncludeCSS {
		yag_theme_library10 = EXT:yag/Resources/Public/CSS/theme.css
		yag_theme_library20 = EXT:yag_theme_library/Resources/Public/CSS/Theme.css
    	yag_theme_library30 = EXT:yag_theme_library/Resources/Public/CSS/BootstrapExtract.css

		jqueryFancybox =  	EXT:yag/Resources/Public/Js/JQuery/Fancybox/jquery.fancybox-1.3.4.css
		yagFancybox=  		EXT:yag/Resources/Public/CSS/Fancybox.css
		lightbox =  		EXT:yag/Resources/Public/CSS/Lightbox.css
	}


	/**
	 * FancyBox settings. See http://fancybox.net/api for a detailed description
	 */
	fancybox {
		margin = 10
		padding = 0
		opacity = 0
		modal = 0
		cyclic = 1
		scrolling = auto
		hideOnOverlayClick = 1
		hideOnContentClick = 0
		overlayShow = 1
		overlayOpacity = 0.8
		overlayColor = #000
		transitionIn = elastic
		transitionOut = elastic
		titlePosition = over
		autoScale =	1
		titleShow = 1
		speedIn = 300
		speedOut = 300
		changeFade = fast
		easingIn = swing
		easingOut = swing
		showCloseButton = 1
		showNavArrows = 1
		enableEscapeButton = 1
	}

}
