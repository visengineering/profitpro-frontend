import { PluginService } from ".";

const transcriptService = PluginService("/transcripts");

class TranscriptService {
  static getTranscriptByUser(transcriptId) {
    return transcriptService({
      method: "GET",
      url: `/${transcriptId}`,
    });
  }
}
export default TranscriptService;
