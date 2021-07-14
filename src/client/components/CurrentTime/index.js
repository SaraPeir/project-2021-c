/* import CurrentTime from './CurrentTime'

export default CurrentTime;
 */
import loadable from "@loadable/component";

export default loadable(() =>
  import(/* webpackChunkName: "current_time" */ "./CurrentTime"),
  {ssr: false}
);