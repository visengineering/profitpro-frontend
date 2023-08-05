import { PluginService } from ".";

const transcriptService = PluginService("/transcript");

class TranscriptService {
  static getTranscriptByUser(transcriptId) {
    return transcriptService({
      method: "GET",
      url: `/${transcriptId}`,
    });
  }
}
export default TranscriptService;
