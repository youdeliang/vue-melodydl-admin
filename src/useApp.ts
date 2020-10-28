import { isNull, isUnDef } from './utils/is';

export function useConfigProvider() {
  function transformCellText({ text }: { text: string }) {
    if (isNull(text) || isUnDef(text)) {
      return ' - ';
    }
  }
  return transformCellText;
}
