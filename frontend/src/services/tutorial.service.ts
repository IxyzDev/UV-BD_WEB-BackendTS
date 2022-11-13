import http from "../http-common";
import { resultProps } from "../interfaces/Publications";

class TutorialDataService {
  getAll() {
    return http.get<Array<resultProps>>("/tutorials");
  }

  get(idPublicacion: string) {
    return http.get<resultProps>(`/tutorials/${idPublicacion}`);
  }

  create(data: resultProps) {
    return http.post<resultProps>("/publicacion/crear", data);
  }

  update(data: resultProps, idPublicacion: any) {
    return http.put<any>(`/tutorials/${idPublicacion}`, data);
  }

  delete(idPublicacion: any) {
    return http.delete<any>(`/tutorials/${idPublicacion}`);
  }

  deleteAll() {
    return http.delete<any>(`/tutorials`);
  }

  findByTitle(title: string) {
    return http.get<Array<resultProps>>(`/tutorials?title=${title}`);
  }
}

export default new TutorialDataService();