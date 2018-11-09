export class Archivo {
    key: string;
    file: File;
    name: string;
    url: string;
    createdAt: Date = new Date();

  constructor(file: File) {
    this.file = file;
  }
}
