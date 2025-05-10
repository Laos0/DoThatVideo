import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cameras',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cameras.component.html',
  styleUrl: './cameras.component.scss'
})
export class CamerasComponent {

  cameraVideos = [
    {
      title: 'Unboxing The Cannon C400',
      description: 'The Canon 24-105mm f/2.8 lens is an excellent all-purpose, versatile lens with outstanding image quality, particularly praised for its wide aperture allowing for great low-light performance, smooth bokeh, and excellent video capabilities.',
      thumbnail: 'https://img.youtube.com/vi/JIWeE8YLvqE/0.jpg',
      url: 'https://www.youtube.com/watch?v=JIWeE8YLvqE'
    },
    {
      title: 'Sony A7 IV Unboxing',
      description: 'In this video, I’m unboxing the VB99 Pro V-mount battery and diving into why I purchased it. With its compact design, airline-compliant size, and impressive power capacity, this battery is perfect for powering your camera, monitors, lights, and more—whether you’re shooting in a studio or traveling the world.',
      thumbnail: 'https://img.youtube.com/vi/AiEEtsLkpS4/0.jpg',
      url: 'https://www.youtube.com/watch?v=AiEEtsLkpS4'
    },
    {
      title: 'Canon C400: Quick Test - Daylight and Low Light Samples',
      description: 'Join me for a quick and casual look at the Canon C400 as I test out some sample footage in both daylight and low-light settings. No deep dives — just some basic shots with minor grades to see how it handles different lighting conditions.',
      thumbnail: 'https://img.youtube.com/vi/UW3bYAiOQ2o/0.jpg',
      url: 'https://www.youtube.com/watch?v=UW3bYAiOQ2o'
    }

    // Add more videos
  ];
}
