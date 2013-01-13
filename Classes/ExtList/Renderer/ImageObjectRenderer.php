<?php
/***************************************************************
*  Copyright notice
*
*  (c) 2011 Daniel Lienert <lienert@punkt.de>
*  All rights reserved
*
*
*  This script is part of the TYPO3 project. The TYPO3 project is
*  free software; you can redistribute it and/or modify
*  it under the terms of the GNU General Public License as published by
*  the Free Software Foundation; either version 2 of the License, or
*  (at your option) any later version.
*
*  The GNU General Public License can be found at
*  http://www.gnu.org/copyleft/gpl.html.
*
*  This script is distributed in the hope that it will be useful,
*  but WITHOUT ANY WARRANTY; without even the implied warranty of
*  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
*  GNU General Public License for more details.
*
*  This copyright notice MUST APPEAR in all copies of the script!
***************************************************************/


class Tx_YagThemeLibrary_ExtList_Renderer_ImageObjectRenderer implements Tx_PtExtlist_Domain_Renderer_ConfigurableRendererInterface {

	/**
	 * @var Tx_Yag_Domain_Repository_ItemRepository
	 */
	protected $itemRepository;

	/**
	 * @var Tx_Yag_Domain_Configuration_ConfigurationBuilder
	 */
	protected $yagConfigurationBuilder;

	/**
	 * @return void
	 */
	public function initRenderer() {
		$settings = $this->getYAGSettings();
		$settings['theme'] = 'default';
		
		Tx_Yag_Domain_Configuration_ConfigurationBuilderFactory::injectSettings($settings);
		$this->yagConfigurationBuilder = Tx_Yag_Domain_Configuration_ConfigurationBuilderFactory::getInstance('sortedItemList', 'filterDemo');

		$this->itemRepository = t3lib_div::makeInstance('Tx_Yag_Domain_Repository_ItemRepository');
	}



	/**
	 * Renders the given list through TypoScript.
	 * Also uses the column definitions.
	 *
	 * @param Tx_PtExtlist_Domain_Model_List_ListData $listData
	 * @return Tx_PtExtlist_Domain_Model_List_ListData
	 */
	public function renderList(Tx_PtExtlist_Domain_Model_List_ListData $listData) {

		$itemUIds = array();

		foreach($listData as $listRow) { /** @var $listRow Tx_PtExtlist_Domain_Model_List_Row */
			$itemUIds[] = $listRow->getCell('itemUid')->getValue();
		}

		$items = $this->itemRepository->getItemsByUids($itemUIds);
		$listData = new Tx_PtExtlist_Domain_Model_List_ListData();

		foreach($items as $item) {
			$row = new Tx_PtExtlist_Domain_Model_List_Row();
			$row->addCell(new Tx_PtExtlist_Domain_Model_List_Cell($item), 'image');
			$listData->addRow($row);
		}

		return $listData;
	}


	
	/**
	 * Renders the column captions out of the TS definition
	 *
	 * @param Tx_PtExtlist_Domain_Model_List_Header_ListHeader $listHeader
	 * @return Tx_PtExtlist_Domain_Model_List_Header_ListHeader
	 */
	public function renderCaptions(Tx_PtExtlist_Domain_Model_List_Header_ListHeader $listHeader) {
		// TODO: Implement renderCaptions() method.
	}


	
	/**
	 * Returns a rendered aggregate list for a given row of aggregates
	 *
	 * @param Tx_PtExtlist_Domain_Model_List_ListData $aggregateListData
	 * @return Tx_PtExtlist_Domain_Model_List_ListData Rendererd List of aggregate rows
	 */
	public function renderAggregateList(Tx_PtExtlist_Domain_Model_List_ListData $aggregateListData) {
		// TODO: Implement renderAggregateList() method.
	}



	/**
	 * @return array
	 */
	protected function getYAGSettings() {
		$setup = $GLOBALS['TSFE']->tmpl->setup;
		$tsSettings =  $setup['plugin.']['tx_yag.']['settings.'];
		return Tx_Extbase_Utility_TypoScript::convertTypoScriptArrayToPlainArray($tsSettings);
	}



	/**
	 * Injecotr for render configuration
	 *
	 * @param Tx_PtExtlist_Domain_Configuration_Renderer_RendererConfig $rendererConfiguration
	 */
	public function injectConfiguration(Tx_PtExtlist_Domain_Configuration_Renderer_RendererConfig $rendererConfiguration) {
		// TODO: Implement injectConfiguration() method.
	}
}
?>
