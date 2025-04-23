import fs from 'fs';
import path from 'path';

export class FileUtil {
    public static ReadFileSync(fileName: string): string {
        const filePath = path.join(__dirname, fileName);
        return fs.readFileSync(filePath, 'utf8');
    }
}