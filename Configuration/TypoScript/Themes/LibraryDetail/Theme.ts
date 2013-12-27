####################################################
# Theme configuration root 
#
# @author Daniel Lienert <daniel@lienert.cc>
# @package YAG
# @subpackage Typoscript
####################################################

plugin.tx_yag.settings.themes.libraryDetail < plugin.tx_yag.settings.themes.library

# Include General theme configuration
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:yag_theme_library/Configuration/TypoScript/Themes/LibraryDetail/General.ts">