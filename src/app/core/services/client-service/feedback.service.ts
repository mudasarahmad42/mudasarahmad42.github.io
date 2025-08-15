import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Feedback } from '../../models/feedback';
import { environment } from '../../../../environments/environment';
import { ApiResponse } from './api-response';
import { Observable, catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  private baseUrl = this.environment.ApiUrl + '/api/feedback';

  constructor(private http: HttpClient, @Inject('environment') private environment: any) { }

  submitFeedback(feedback: Feedback): Observable<ApiResponse<Feedback>> {
    return this.http.post<ApiResponse<Feedback>>(`${this.baseUrl}/submit`, feedback)
      .pipe(
        catchError(error => {
          return of({ isSuccess: false, message: 'An error occurred while submitting feedback' });
        })
      );
  }
}
