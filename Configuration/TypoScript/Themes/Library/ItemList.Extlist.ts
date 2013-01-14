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
            LEFT JOIN  tx_yag_item_tag_mm tagmm ON tagmm.uid_local = item.uid
            LEFT JOIN  tx_yag_domain_model_tag tag ON tag.uid = tagmm.uid_foreign
        )

        baseWhereClause (
        	item.uid > 0
        )

        baseGroupByClause (
        	item.uid
        )
    }

    fields {

    	pid {
    		table = item
    		field = pid
    	}

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

		focalLength {
            table = meta
            field = focal_length
        }

        iso {
			table = meta
			field = iso
		}

		shutterSpeed {
			table = meta
			field = shutter_speed
		}

		aperture {
			table = meta
			field = aperture
		}

		captureDate {
			table = meta
			field = capture_date
		}

		tag {
			table = tag
			field = name
		}

		tagCount {
			table = tag
			field = count
		}

		tagsCombined {
			special (
				SELECT GROUP_CONCAT(tagInner.name)
				FROM tx_yag_domain_model_tag tagInner
				LEFT JOIN tx_yag_item_tag_mm tagInnerMm ON tagInner.uid = tagInnerMm.uid_foreign
                WHERE tagInnerMm.uid_local = item.uid
                GROUP BY item.uid
            )
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
                rendererClassName = Tx_Yag_Extlist_Renderer_ImageObjectRenderer
            }
            110 {
				rendererClassName = Tx_Yag_Extlist_Renderer_ImageListRenderer
			}
        }
    }

    filters {

		internalFilters {
			filterConfigs {
				10 {
					partialPath = EXT:pt_extlist/Resources/Private/Partials/Filter/Special/ProxyFilter.html
					filterClassName = Tx_Yag_Extlist_Filter_PidFilter
					filterIdentifier = pidFilter
					fieldIdentifier = pid
				}
			}
		}

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
					fieldIdentifier = galleryUid
					label = Gallery
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

				120 < plugin.tx_ptextlist.prototype.filter.tagCloud
				120 {
					filterIdentifier = tagCloud
					partialPath = EXT:yag_theme_library/Resources/Private/Partials/Filter/Options/TagCloudFilter.html
					label = Tags
					fieldIdentifier = tag
					countFieldIdentifier = tagCount
				}

				200 < plugin.tx_ptextlist.prototype.filter.string
				200 {
					filterIdentifier = search
					fieldIdentifier = *
					label = Search
					partialPath = EXT:pt_extlist/Resources/Private/Partials/Filter/String/StringFilter.html
				}
            }
        }
    }
}