import { Component, OnInit } from '@angular/core'
import { User, UsersService } from '../../services/users.service'
import { Observable } from 'rxjs'
import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'
import { ActivatedRoute, Router, RouterLink } from '@angular/router'

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent implements OnInit {
  $users!: Observable<User[]>

  constructor(
    private usersService: UsersService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const page = Number(this.route.snapshot.queryParamMap.get('page'))
    const nextPage = page ? page : 1
    this.getUsers(nextPage)
  }
  getUsers(page: number) {
    this.$users = this.usersService.getUsers(page)
  }
  onNextUsers() {
    const page = Number(this.route.snapshot.queryParamMap.get('page'))
    const nextPage = page ? page + 1 : 2

    this.router.navigateByUrl(`users?page=${nextPage}`).then(() => {
      this.getUsers(nextPage)
    })
  }
}
