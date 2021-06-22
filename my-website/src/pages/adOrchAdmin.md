import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
  defaultValue="apple"
  values={[
    {label: 'Expressions', value: 'exp'},
    {label: 'Rules', value: 'rules'},
    {label: 'Advertisements', value: 'ads'},
    {label: 'Pacing And Scheduling', value: 'pands'},
  ]}>
  <TabItem value="exp">
    An Expression is a representation of a particular specification of a given entity. eg. City Equals to Jaipur entails an Expression. A Given Expression primarily comprises of a LHS Operator and RHS, in the same order. Other relevant properties of an expression are the type, the data type involved in the expression and a relevant description of what the expression is.
  </TabItem>
  <TabItem value="rules">
    A Rule is a set of expressions, with operators such as AND, OR between the given expressions . eg. 'City Equals to Jaipur OR City Equals to Panaji' entails a Rule. In the portal, a Rule is created by a set of expression ID's ( visible in a list), in conjunction with operators between the expression ID's. There are two ways to create a Rule. The first way, is by using the drag and drop feature, or by simply typing the rule to be created.
  </TabItem>
  <TabItem value="ads">
    The Advertisement section lists down all the Advertisements of a given Camapiagn and Advertiser. Each Advertiser can have multiple campaigns and each campaign can have muilitple Advertisements. The table shows various field such as Id, Name, Lob (line of business), etc. The field Details shows additional info about the Advertisement. When clicked, it opens up Box containing the information of the Advertisement. It can also be used to edit or update Advertisement. For eg if the RULE of the Advertisement needs to be changed from say 1 to 2, same can be done buy selecting the corresping rule form the Rule textbox and pressing Update Advertisement.
  </TabItem>
  <TabItem value="pands">
    This Section lists down the Pacing and Scheduling Info of an Advertisement zone wise (every zone to which this Ad is mapped to). It also provides for an option to Add a Fresh Pacing and Scheduling data for a new zone.The table shows various field such as ZoneId, Scheduled, Status, etc. The field Details shows additional info about. When clicked, it opens up Box containing the additional information. It can also be used to edit or update Pacing ans Scheduling Data for the respective Advertisement.
  </TabItem>
</Tabs>