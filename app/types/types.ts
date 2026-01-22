export interface ILanguage {
    code: TLanguageCode;
    readableName: string;
}

export type TLanguageCode = string;

export interface IActionButtonsRowProps {
    handleTranslateButton: () => Promise<void>;
    handleFavoriteButton: () => void;
    handleReverseButton: () => Promise<void>;
}

export interface ITranslation {
    text: string;
    target: string;
}

export interface IFavoritesItem {
    key: string;
    translation: string;
    index?: number;
}
