####################################################
# Extlist configuration of the album 
#
# @author Daniel Lienert <daniel@lienert.cc> 
# @author Michael Knoll <mimi@kaktusteam.de>
# @package YAG
# @subpackage Typoscript
####################################################

plugin.tx_yag.settings.themes.library.extlist.itemList >
plugin.tx_yag.settings.themes.library.extlist.itemList {

	backendConfig < plugin.tx_ptextlist.prototype.backend.typo3
    backendConfig {

        baseFromClause (
            tx_yag_domain_model_item item
            INNER JOIN tx_yag_domain_model_itemmeta meta ON item.item_meta = meta.uid
            INNER JOIN tx_yag_domain_model_album album ON album.uid = item.album
            INNER JOIN tx_yag_domain_model_gallery gallery ON gallery.uid = album.gallery
        )
    }

    fields {
        itemUid {
            table = item
            field = uid
        }

        itemTitle {
            table = item
            field = title
        }

		albumUid {
			table = item
            field = album
		}

		albumName {
			table = album
			field = name
		}

		galleryUid {
			table = gallery
			field = uid
		}

		galleryName {
			table = gallery
			field = name
		}

        itemDescription {
            table = item
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

        iso {
			table = meta
			field = iso
		}
    }

    columns {
        10 {
            label = Item
            columnIdentifier = item
            fieldIdentifier = itemUid
        }
    }

	pager.itemsPerPage < plugin.tx_yag.settings.themes.library.itemList.itemsPerPage

    rendererChain {
        rendererConfigs {
            100 {
                rendererClassName = Tx_YagThemeLibrary_ExtList_Renderer_ImageObjectRenderer
            }
            110 {
				rendererClassName = Tx_Yag_Extlist_Renderer_ImageListRenderer
			}
        }
    }

    filters {
        metaFilterBox {

            filterConfigs {

                10 < plugin.tx_ptextlist.prototype.filter.select
                10 {
                    filterIdentifier = artist
                    fieldIdentifier = artist
                    label = Artist
                    inactiveOption = [ Show All ]
                    multiple = 1
                    partialPath = EXT:pt_extlist/Resources/Private/Partials/Filter/Options/SelectFilter.html
                }

                20 < plugin.tx_ptextlist.prototype.filter.select
                20 {
                    filterIdentifier = camera
                    fieldIdentifier = camera
                    label = Camera Model
                    inactiveOption = [ Show All ]
                    multiple = 1
                    partialPath = EXT:pt_extlist/Resources/Private/Partials/Filter/Options/SelectFilter.html
                }

                30 < plugin.tx_ptextlist.prototype.filter.select
                30 {
                    filterIdentifier = lens
                    fieldIdentifier = lens
                    label = Lens
                    inactiveOption = [ Show All ]
                    multiple = 1
                    partialPath = EXT:pt_extlist/Resources/Private/Partials/Filter/Options/SelectFilter.html
                }

                40 < plugin.tx_ptextlist.prototype.filter.select
				40 {
					filterIdentifier = iso
					fieldIdentifier = iso
					label = ISO
					inactiveOption = [ Show All ]
					multiple = 1
					partialPath = EXT:pt_extlist/Resources/Private/Partials/Filter/Options/SelectFilter.html
				}

				100 < plugin.tx_ptextlist.prototype.filter.select
				100 {
					filterIdentifier = gallery
					fieldIdentifier = galleryUid, galleryName
					label = Gallery
					filterField = galleryUid
					displayFields = galleryName
					inactiveOption = [ Show All ]
					multiple = 1
					partialPath = EXT:pt_extlist/Resources/Private/Partials/Filter/Options/SelectFilter.html
				}

				110 < plugin.tx_ptextlist.prototype.filter.select
				110 {
					filterIdentifier = album
					fieldIdentifier = albumUid, albumName
					label = Album
					filterField = albumUid
					displayFields = albumName
					inactiveOption = [ Show All ]
					multiple = 1
					partialPath = EXT:pt_extlist/Resources/Private/Partials/Filter/Options/SelectFilter.html
				}

				200 < plugin.tx_ptextlist.prototype.filter.string
				200 {
					filterIdentifier = search
					fieldIdentifier = *
					label = Meta Search
					partialPath = EXT:pt_extlist/Resources/Private/Partials/Filter/String/StringFilter.html
				}
            }
        }
    }
}