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