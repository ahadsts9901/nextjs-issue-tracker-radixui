import React from 'react'
import { Text } from "@radix-ui/themes"

const ErrorMessage = ({ children }) => {

  if (!children) return null;
  
  return (
    <Text as="p" color="red">{children}</Text>
  )
}

export default ErrorMessage