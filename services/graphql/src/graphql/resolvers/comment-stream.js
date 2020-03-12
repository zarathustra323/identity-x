const { applicationService } = require('@identity-x/service-clients');
const typeProjection = require('../utils/type-projection');

module.exports = {
  /**
   *
   */
  CommentStream: {
    id: stream => stream._id,
    /**
     *
     */
    application: (stream, _, __, info) => {
      const fields = typeProjection(info);
      return applicationService.request('findById', { id: stream.applicationId, fields });
    },
  },
};
