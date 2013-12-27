####################################################
# Extlist configuration of the album 
#
# @author Daniel Lienert <daniel@lienert.cc>
# @package YAG
# @subpackage Typoscript
####################################################

plugin.tx_yag.settings.themes.libraryDetail {

	title = YAG Library Detail List
    description = Using Extlist to Filter YAG Records and showing it in a detail list

	controller.ItemList.unCachedList.template = EXT:yag_theme_library/Resources/Private/Templates/ItemList/DetailList.html

	itemList.itemsPerPage = 5
}



