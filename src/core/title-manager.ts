export class TitleManager {
  private static instance: TitleManager;
  private baseTitle = 'cd-labs';

  private constructor() {}

  static getInstance(): TitleManager {
    if (!TitleManager.instance) {
      TitleManager.instance = new TitleManager();
    }
    return TitleManager.instance;
  }

  updateTitle(title: string): void {
    document.title = title.includes(this.baseTitle) ? title : `${title} | ${this.baseTitle}`;
  }
}

export const titleManager = TitleManager.getInstance();