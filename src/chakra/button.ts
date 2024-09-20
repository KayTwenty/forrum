import { ComponentStyleConfig } from "@chakra-ui/theme";

/**
 * A universal button theme for the entire app.
 * There are different variances of the buttons:
 *  - `solid` (default): button with solid fill
 *  - `outline`: button with outline colour
 *  - `oauth`: button specifically for authentication providers
 *
 * @param props The component props, which are passed through to the underlying `button` element.
 * @param children The component children, which are rendered as the
 * @returns {ComponentStyleConfig} - The rendered `button` element
 * @see https://chakra-ui.com/docs/theming/component-style
 */
export const Button: ComponentStyleConfig = {
  baseStyle: {
    // Base styles applied to all variants
    borderRadius: "10px",
    fontSize: "10pt",
    fontWeight: 700,
    _focus: {
      boxShadow: "none",
    },
  },
  sizes: {
    sm: {
      fontSize: "8pt",
    },
    md: {
      fontSize: "10pt",
      // height: "28px",
    },
  },
  // Different visual variants of the button
  variants: {
    solid: {
      // Default button
      color: "white",
      bg: "black",
      _hover: {
        bg: "gray.800",
      },
    },
    outline: {
      color: "black",
      border: "1px solid",
      borderColor: "black",
      _hover: {
        bg: "gray.800",
        color: "white",
      },
    },
    oauth: {
      height: "34px",
      border: "1px solid",
      borderColor: "gray.300",
      _hover: {
        bg: "gray.50",
        borderColor: "gray.800",
      },
    },
  },
};