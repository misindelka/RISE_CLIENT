import React from 'react';

import { IoSearchOutline } from 'react-icons/io5';
import { useTranslation } from 'react-i18next';
import {
	SortBar,
	SortSelect,
	SearchProduct,
	SContainer,
	LabelSmall,
} from '../styles/modulesComponents';

const SearchBar: React.FC<any> = ({ handleSort, handleSearch }) => {
	const { t } = useTranslation();

	return (
		<SortBar>
			<SContainer>
				<IoSearchOutline size={15} />
				<SearchProduct
					placeholder={t('searchProduct')}
					type='text'
					onChange={handleSearch}
				/>
			</SContainer>

			<SContainer>
				<LabelSmall>{t('productsSortBy')}</LabelSmall>
				<SortSelect defaultValue='sort' onChange={handleSort}>
					<option value='byPrice'>{t('sortByPrice')}</option>
					<option value='byName'>{t('sortByName')}</option>
					<option value='byDate'>{t('sortByDataAdded')}</option>
					<option value='byOrigin'>{t('sortByOrigin')}</option>
				</SortSelect>
			</SContainer>
		</SortBar>
	);
};

export default SearchBar;
