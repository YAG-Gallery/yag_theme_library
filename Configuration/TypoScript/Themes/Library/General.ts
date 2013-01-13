####################################################
# Extlist configuration of the album 
#
# @author Daniel Lienert <daniel@lienert.cc> Michael Knoll <knoll@punkt.de>
# @package YAG
# @subpackage Typoscript
####################################################

plugin.tx_yag.settings.themes.library {

	title = YAG Library
	description = Using Extlist to Filter YAG Records

    controller {
        ItemList {
            unCachedlist.template = EXT:yag_theme_library/Resources/Private/Templates/ItemList/List.html
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
}
