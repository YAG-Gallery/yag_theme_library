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


	## Define CSS Files to include.
	includeCSS {
		yag_theme_library = EXT:yag_theme_library/Resources/Public/CSS/Theme.css
	}

}
