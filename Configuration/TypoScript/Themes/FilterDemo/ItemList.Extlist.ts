####################################################
# Extlist configuration of the album 
#
# @author Daniel Lienert <daniel@lienert.cc> 
# @author Michael Knoll <mimi@kaktusteam.de>
# @package YAG
# @subpackage Typoscript
####################################################

plugin.tx_yag.settings.themes.filterDemo.extlist.itemList >
plugin.tx_yag.settings.themes.filterDemo.extlist.itemList {

	backendConfig < plugin.tx_ptextlist.prototype.backend.typo3
    backendConfig {

        baseFromClause (
            tx_yag_domain_model_item
            INNER JOIN tx_yag_domain_model_itemmeta meta ON tx_yag_domain_model_item.item_meta = meta.uid
        )

        tables (
            tx_yag_domain_model_item
        )
    }

    fields {
        itemUid {
            table = tx_yag_domain_model_item
            field = uid
        }

        itemTitle {
            table = tx_yag_domain_model_item
            field = title
        }

        itemDescription {
            table = tx_yag_domain_model_item
            field = description
        }

        camera {
            table = meta
            field = camera_model
        }

        artist {
            table = meta
            field = artist
        }

        lens {
            table = meta
            field = lens
        }
    }

    columns {
        10 {
            label = Item
            columnIdentifier = item
            fieldIdentifier = itemUid
        }
    }

    pager.itemsPerPage = 20

    rendererChain {
        rendererConfigs {
            100 {
                rendererClassName = Tx_YagThemeFilterdemo_ExtList_Renderer_ImageObjectRenderer
            }
            110 {
				rendererClassName = Tx_Yag_Extlist_Renderer_ImageListRenderer
			}
        }
    }

    filters {
        filterBox1 {
            showReset = 0

            filterConfigs {

                10 < plugin.tx_ptextlist.prototype.filter.string
                10 {
                    filterIdentifier = search
                    fieldIdentifier = *
                    label = Meta Search
                    partialPath = EXT:pt_extlist/Resources/Private/Partials/Filter/String/StringFilter.html
                }

                15 < plugin.tx_ptextlist.prototype.filter.select
                15 {
                    filterIdentifier = artist
                    fieldIdentifier = artist
                    label = Artist
                    inactiveOption = [ Show All ]
                    partialPath = EXT:pt_extlist/Resources/Private/Partials/Filter/Options/SelectFilter.html
                }

                20 < plugin.tx_ptextlist.prototype.filter.select
                20 {
                    filterIdentifier = camera
                    fieldIdentifier = camera
                    label = Camera Model
                    inactiveOption = [ Show All ]
                    partialPath = EXT:pt_extlist/Resources/Private/Partials/Filter/Options/SelectFilter.html
                }

                30 < plugin.tx_ptextlist.prototype.filter.select
                30 {
                    filterIdentifier = lens
                    fieldIdentifier = lens
                    label = Lens
                    inactiveOption = [ Show All ]
                    partialPath = EXT:pt_extlist/Resources/Private/Partials/Filter/Options/SelectFilter.html
                }
            }
        }
    }
}