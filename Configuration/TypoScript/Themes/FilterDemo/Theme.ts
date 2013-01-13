####################################################
# Theme configuration root 
#
# @author Daniel Lienert <daniel@lienert.cc>, Michael Knoll <knoll@punkt.de>
# @package YAG
# @subpackage Typoscript
####################################################

plugin.tx_yag.settings.themes.filterDemo < plugin.tx_yag.settings.themes.lightbox

# Include General theme configuration
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:yag_theme_filterdemo/Configuration/TypoScript/Themes/FilterDemo/General.ts">

# Include ImageList Definitions
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:yag_theme_filterdemo/Configuration/TypoScript/Themes/FilterDemo/ItemList.ts">

# Include ImageList Extlist Definitions
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:yag_theme_filterdemo/Configuration/TypoScript/Themes/FilterDemo/ItemList.Extlist.ts">
