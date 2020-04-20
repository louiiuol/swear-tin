import {Location} from '@angular/common';
import {TestBed, async, fakeAsync, tick} from '@angular/core/testing';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {Router} from '@angular/router';
import { UserGuard } from './user.gard';
import { AuthService } from '../auth/auth.service';
import { UserService } from '../../domain/user/user.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';
import { routes } from 'src/app/app-routing.module';

describe('UserGuard', () => {

    let location: Location;
    let guard: UserGuard;
    let authService: AuthService;
    let router: Router;

    // async beforeEach
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule.withRoutes(routes), FormsModule, CommonModule, HttpClientTestingModule, MatSnackBarModule],
            providers: [UserGuard, UserService ]
        })
            .compileComponents(); // compile template and css
        guard = TestBed.inject(UserGuard);
        location = TestBed.inject(Location);
        router = TestBed.inject(Router);
        authService = TestBed.inject(AuthService);
        router.initialNavigation();
    }));

    it(' should create', () => {
        expect(guard).toBeTruthy();
    });

    it(' should be able to hit route when user is logged in', fakeAsync(() => {
        spyOn(authService, 'isLoggedIn').and.returnValue(true);
        router.navigate(['/dashboard']).then(() => {
            expect(guard.canActivate()).toBe(true);
            tick();
            expect(location.path()).toBe('/dashboard');
        });
    }));

    it(' shouldn\'t be able to hit route when user is not logged in', fakeAsync(() => {
        spyOn(authService, 'isLoggedIn').and.returnValue(false);
        router.navigate(['/dashboard']).then(() => {
            expect(guard.canActivate()).toBe(false);
            tick();
            expect(location.path()).toBe('/welcome');
        });
    }));

});
