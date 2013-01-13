####################################################
# Theme configuration root 
#
# @author Daniel Lienert <daniel@lienert.cc>, Michael Knoll <knoll@punkt.de>
# @package YAG
# @subpackage Typoscript
####################################################

plugin.tx_yag.settings.themes.library < plugin.tx_yag.settings.themes.lightbox

# Include General theme configuration
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:yag_theme_library/Configuration/TypoScript/Themes/Library/General.ts">

# Include ImageList Definitions
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:yag_theme_library/Configuration/TypoScript/Themes/Library/ItemList.ts">

# Include ImageList Extlist Definitions
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:yag_theme_library/Configuration/TypoScript/Themes/Library/ItemList.Extlist.ts">
