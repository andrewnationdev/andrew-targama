export interface ILanguage {
    code: TLanguageCode;
    readableName: string;
}

export type TLanguageCode = string;

export interface IActionButtonsRowProps {
    handleTranslateButton: () => Promise<void>;
    handleFavoriteButton: () => void;
    handleReverseButton: () => Promise<void>;
    enableTranslateButton: boolean;
    enableFavoriteButton?: boolean;
}

export interface ITranslation {
    text: string;
    target: string;
}

export interface IFavoritesItem {
    text: string;
    translation: string;
    index?: number;
}
