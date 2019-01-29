import { Time } from '@angular/common';
import { Text } from '@angular/compiler';

export class Image {
    id: number;
    filename: string;
    sourceCamera: string;
    date: Date;
    time: Time;
    description: Text;
    lastUpdate: string;
    status: string;
}