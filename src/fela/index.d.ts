import { CssFelaStyle, StyleFunction } from "react-fela";

type FelaStyleType = Record<string, CssFelaStyle<{}, {}>>;

export type FelaStyle = FelaStyleType | Record<string, FelaStyleType>;

export type FelaFunction<T> = StyleFunction<{}, T>;
