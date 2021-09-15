/* eslint-disable no-unused-vars */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-tabs */
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ProductsBar from './ProductsBar'
import ProductCard from './Cards/productCard'
import SearchBar from './searchBar'
import NoProducts from './Cards/noProducts'
import { ShopWrapper, ProductsWrapper, ContentContainer } from '../styles/modulesComponents'
import { IProductTypes, TAddToBox } from '../../Types/types'
import { addToBox } from '../../Redux/Actions/boxActions'

interface IProps {
    product: IProductTypes
    categoryId: string
    match: any
}

const Products: React.FC<IProps> = (props) => {
    const productsData = useSelector<IProductTypes>((state) => state.products.data)
    const [search, setSearch] = useState('')
    const [sortedProducts, setSortedProducts] = useState<any>()

    // eslint-disable-next-line no-unused-vars
    const products = sortedProducts || productsData
    const categoryId = props.match.params.category_id
    const dispatch = useDispatch()

    const addProductToBox: TAddToBox = (p) => {
        dispatch(addToBox(p))
    }

    const handleSeach = (e) => {
        setSearch(e.target.value)
    }

    const filteredProducts = products.filter(
        (product) => product.name.toLowerCase().indexOf(search.toLowerCase()) !== -1
    )

    const handleSort = (e) => {
        const sortBy = e.target.value

        if (sortBy === 'byPrice') {
            setSortedProducts([...products].sort((a, b) => (a.price > b.price ? 1 : -1)))
        }
        if (sortBy === 'byName') {
            setSortedProducts([...products].sort((a, b) => (a.name > b.name ? 1 : -1)))
        }

        if (sortBy === 'byDate') {
            setSortedProducts([...products].sort((a, b) => (a.updatedAt > b.updatedAt ? 1 : -1)))
        }

        if (sortBy === 'byOrigin') {
            setSortedProducts([...products].sort((a, b) => (a.desc > b.desc ? 1 : -1)))
        }
    }

    const productsSlug = products.map((i) => i.slug).some((slug) => slug === categoryId)

    return (
        <ShopWrapper>
            <ProductsBar />

            <ContentContainer>
                <ProductsWrapper>
                    {productsSlug === true ? (
                        <>
                            <SearchBar handleSort={handleSort} handleSearch={handleSeach} />
                            {search === ''
                                ? products?.map((product, i) => (
                                      <>
                                          {categoryId === product.slug && (
                                              <ProductCard
                                                  key={i}
                                                  product={product}
                                                  addProductToBox={addProductToBox}
                                              />
                                          )}
                                      </>
                                  ))
                                : filteredProducts?.map((product, i) => (
                                      <>
                                          {categoryId === product.slug && (
                                              <ProductCard
                                                  key={i}
                                                  product={product}
                                                  addProductToBox={addProductToBox}
                                              />
                                          )}
                                      </>
                                  ))}
                        </>
                    ) : (
                        <NoProducts />
                    )}
                </ProductsWrapper>
            </ContentContainer>
        </ShopWrapper>
    )
}
export default Products
