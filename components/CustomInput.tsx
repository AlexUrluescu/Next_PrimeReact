import React from 'react'

import { CustomInputType } from '@/interfaces'

const CustomInput = ({ inputType, placeholderInput, styleInput }: CustomInputType) => {
  return (
    <input className = {styleInput} type={inputType} placeholder={placeholderInput}/>
  )
}

export default CustomInput