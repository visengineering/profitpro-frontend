import { PluginService } from ".";

const transcriptService = PluginService('/transcripts');

class TranscriptService {
  static getTranscriptByUser(userId, params) {
    return transcriptService({
      method: "GET",
      url: `/${userId}`,
      params
    })
  }
}

export default TranscriptService;