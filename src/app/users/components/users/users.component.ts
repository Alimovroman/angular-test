import { Component, OnInit } from '@angular/core'
import { User, UsersService } from '../../services/users.service'
import { Observable } from 'rxjs'
import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'
import { ActivatedRoute, Params, Router, RouterLink } from '@angular/router'

@Component({
  selector: 'app-users',
  // standalone: false,
  // imports: [CommonModule, RouterLink],
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
    this.route.queryParams.subscribe((params: Params) => {
      this.getUsers(params['page'] ? params['page'] : 1)
    })
  }
  getUsers(page: number) {
    this.$users = this.usersService.getUsers(page)
  }
  onNextUsers() {
    const page = Number(this.route.snapshot.queryParamMap.get('page'))
    const nextPage = page ? page + 1 : 2

    //1 variant
    // this.router.navigateByUrl(`users?page=${nextPage}`).then(() => {
    //   this.getUsers(nextPage)
    // })

    //2 variant
    this.router.navigate(['/users'], { queryParams: { page: nextPage } })
  }
}
