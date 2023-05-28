import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(
    public authService: AuthService
  ) {}

  ngOnInit(): void {
    // Initialize component properties or perform any necessary setup logic here
  }

  avatarUrl: string = '';
  fileToUpload: File | null = null; // Allow null values explicitly

  onFileSelected(event: any) {
    this.fileToUpload = event.target.files[0];
    this.previewAvatar(this.fileToUpload);
  }

  previewAvatar(file: File | null) { // Update the parameter type to allow null
    if (file) { // Add a null check before accessing the file
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.avatarUrl = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  uploadAvatar() {
    // Implement your avatar upload logic here
    console.log('Upload avatar', this.fileToUpload);
  
    // Reset the fileToUpload variable after the upload is completed or canceled
    this.fileToUpload = null;
  }
}
