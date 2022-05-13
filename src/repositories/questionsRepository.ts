import Http from '@/services/Http'

export default class QuestionsRepository extends Http {
  async all() {
    return await this.get('surveys/frontend-interview')
  }
}
