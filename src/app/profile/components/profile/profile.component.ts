import { Observable } from 'rxjs'
import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { ProfileResponse, ProfileService } from '../../services/profile.service'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-profile',
  // standalone: true,
  // imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent implements OnInit {
  profile$!: Observable<ProfileResponse>

  constructor(
    private route: ActivatedRoute,
    private profileService: ProfileService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const userId = Number(this.route.snapshot.paramMap.get('userId'))
    if (userId) {
      this.profile$ = this.profileService.getProfile(userId)
    }
  }
  onBackToUsers() {
    this.router.navigate(['/users'])
  }
}
