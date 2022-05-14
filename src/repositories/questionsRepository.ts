import Http from 'services/Http'

import type { GetQuestionsResponse } from 'types/requests'

export default class QuestionsRepository extends Http {
  getQuestions() {
    return this.get<GetQuestionsResponse>('surveys/frontend-interview')
  }
}
